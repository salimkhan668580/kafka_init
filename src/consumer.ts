
import { consumer} from './kafkaConfig';
export const consumerFun = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'login-notification', fromBeginning: true })

    await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value?.toString(),
      })
    },
  })
};