# Gerenciamento de Viagens

## Sobre o Projeto

O projeto consiste no backend de uma aplicação para gerenciamento de viagens, onde um indivíduo cria uma viagem estipulando datas e o lugar e consegue enviar o convite por e-mail para outras pessoas. 

## Rotas do Projeto

Abaixo estão algumas rotas do projeto. Não irei colocar todas as rotas pois iria ficar muito extenso. Abaixo das imagens está a descrição do que ela representa.

![Criação da Viagem](./src/assets/img/8164C231-6E7F-4EB0-B2C0-29EBF1A2D3D9.jpeg)
A imagem acima mostra a rota de criação de uma viagem e a geração do ID dela.


![Criação da Viagem com nome e e-mail do owner](./src/assets/img/0857833C-B5A7-41D1-8BE6-5649F336C67C.jpeg)
Nessa outra imagem, já está a inserção do responsável pela viagem.


![Registro no Prisma Studio](./src/assets/img/A30460BE-4384-409E-92E8-7F88BF416BED_4_5005_c.jpeg)
Vemos aqui o registro da criação da viagem no Bando de Dados, no caso o SQLite, através do Prisma Studio.


![Console do Terminal indicando a URL para acessar o e-mail](./src/assets/img/437F2165-4DDF-426F-8FA6-936BB66E54A7_4_5005_c.jpeg)
Aqui consta a URL para acessar o e-mail enviado para teste. No projeto o servidor SMTP é um "fake" SMTP, no caso o nodemailer/ethereal, pois geralmente esse serviço é pago.


![URL do e-mail de teste](./src/assets/img/EE6FCE4A-103B-4303-9213-8A93E55E7F6C_1_105_c.jpeg)
E-mail de teste aberto através da URL indicada na imagem acima.

## Tecnologias utilizadas

- Node.js
- Etheral (Servidor SMTP)
- TypeScript
- Fastify
- Zod
- Prisma ORM
- SQLite