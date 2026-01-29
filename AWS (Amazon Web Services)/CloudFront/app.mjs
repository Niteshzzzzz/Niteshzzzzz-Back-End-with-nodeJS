import {CloudFrontClient, CreateInvalidationCommand} from '@aws-sdk/client-cloudfront'

const client = new CloudFrontClient({profile: 'storageApp'})

const command = new CreateInvalidationCommand({
    DistributionId: 'E3R9RM7IIM8GTQ',
    InvalidationBatch: {
        CallerReference: '1234',
        Paths: {
            Quantity: 1,
            Items: ['/upload/NITESHKK.jpg']
        }
    }
})

const res = await client.send(command)

console.log(res)