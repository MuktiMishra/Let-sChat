import amqp from 'amqplib';

let channel: amqp.Channel;

export const connectRabbitMQ = async()=>{
    try{
        const connection = await amqp.connect({
            protocol: "amqp",
            hostname: process.env.Rabbitmq_host,
            port: 5672,
            username: process.env.Rabbitmq_Username,
            password: process.env.Rabbitmq_Password,
        });

        channel = await connection.createChannel();
        
    }
}