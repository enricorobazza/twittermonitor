import tweepy
from twittermonitor import JsonStreamListener, checker, DynamicTwitterStream
import os
import time
import json
import urllib.request
from kafka import KafkaProducer
from datetime import datetime
# The file containing terms to track
terms_filename = "tracking_terms.txt"

# How often to check the file for new terms
poll_interval = 15

api_key = os.environ.get("API_KEY")
api_secret = os.environ.get("API_SECRET_KEY")
access_token = os.environ.get("ACCESS_TOKEN")
access_token_secret = os.environ.get("ACCESS_TOKEN_SECRET")

auth = tweepy.OAuthHandler(api_key, api_secret)
auth.set_access_token(access_token, access_token_secret)

class PrintingListener(JsonStreamListener):
    def on_data(self, tweet, track):
        tweet = json.loads(tweet)
        frase = str(tweet['text'])
        data_e_hora_completa = datetime.now()
        data_string = data_e_hora_completa.strftime('%Y-%m-%d %H:%M:%S')
        dados = {"track": track, "tweet": frase, "horario": data_string}
        print("sending to kafka: ", track)
        producer.send(topico, value=dados)
        return True

class TermChecker(checker.TermChecker):
    def update_tracking_terms(self):
        response = urllib.request.urlopen("%s/api/words"%os.environ.get('API_HOST'))
        data = json.load(response)
        print(data)
        return set(data)

listener = PrintingListener()
checker = TermChecker()

broker = 'localhost:%s'%os.environ.get("KAFKA_PORT")
topico = os.environ.get("KAFKA_TOPIC")
producer = KafkaProducer(bootstrap_servers=[broker],
                         value_serializer=lambda x:
                         json.dumps(x).encode('utf-8'))


# Start and maintain the streaming connection...
stream = DynamicTwitterStream(auth, listener, checker)
while True:
    try:
        stream.start_polling(poll_interval)
    except Exception as e:
        print(e)
        time.sleep(1)  # to avoid craziness with Twitter