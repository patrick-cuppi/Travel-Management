import fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";
import { createTrip } from "./routes/create-trips";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { confirmTrip } from "./routes/confirm-trip";
import { confirmParticipant } from "./routes/confirm-participant";
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";
import { createLink } from "./routes/create-link";

const app = fastify()

app.register(cors, {
    origin: '*',

})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipant)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)

app.listen({ port: 3333 }).then(() => {
    console.log('Server Running!')
})
