import {Kafka} from "kafkajs"

const kafka = new Kafka({
  clientId: 'notification-service',
 brokers: ["localhost:9092"]
})

export const  producer = kafka.producer()
export const consumer = kafka.consumer({ groupId: 'notification-group' })

