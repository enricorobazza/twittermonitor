# importando as bibliotecas
from kafka import KafkaConsumer
import json
# from predict import SentimentPrediction
from googletrans import Translator
import os
import urllib.request
from urllib import request, parse

#configuração do kafka
brokers = ['%s:%s'%(os.environ.get("KAFKA_HOST"), os.environ.get("KAFKA_PORT"))]
topic = os.environ.get("KAFKA_TOPIC")
# pred = SentimentPrediction()
translator = Translator()
# print("Finished training")
consumer = KafkaConsumer(topic, group_id = None, bootstrap_servers = brokers)

positivo = 0
negativo = 0

#geração da nuvem de palavras em tempo real
frases = ''
for message in consumer:
    kafka_data = json.loads(message.value.decode('utf-8'))
    frase = translator.translate(kafka_data['tweet'], dest='pt').text
    print(frase)
    data = {"track": kafka_data["track"], "tweet": frase, "time": kafka_data["time"]}
    # data = str(json.dumps(data))
    # data = data.encode('utf-8')

    req = request.Request("%s/api/tweet"%os.environ.get("API_HOST"), method="POST")
    req.add_header('Content-Type', 'application/json')
    data = json.dumps(data).encode('utf-8')
    try:
        resp = request.urlopen(req, data=data)
        content = resp.read()
        print(content)
    except:
        print("Error inserting!!")

    # response = urllib.request.urlopen("%s/api/words"%os.environ.get('API_HOST'))

    # print(texto['tweet'])
    # resp = pred.predict_text(frase)
    # if resp == 1:
    #     positivo += 1
    # else:
    #     negativo += 1

    # print("Positivo: %d, Negativo: %d"%(positivo, negativo))
    # print(pred.predict_text(texto['tweet']))



    # wordcloud = WordCloud(max_font_size=100, width = 1520, height = 535).generate(frases)
    # plt.figure(figsize=(16,9))
    # plt.imshow(wordcloud)
    # plt.axis("off")
    # plt.show()