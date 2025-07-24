# 📜 Documentação Técnica da Infraestrutura AWS

## 🌐 1. Frontend – Amazon S3 + CloudFront

- Site hospedado em bucket S3 com hospedagem estática ativada
- Integração com AWS CloudFront para entrega rápida global
- Política de acesso: somente via CDN (bloqueio de acesso direto)
- Versionamento de arquivos ativado

---

## ⚙️ 2. Backend – AWS Lambda + API Gateway

- Funções Lambda escritas em Node.js
- Integração com API Gateway para criar endpoints RESTful
- Controle de erros e logs via Amazon CloudWatch
- Permissões configuradas com IAM Role customizado

---

## 🧩 3. Banco de Dados – Amazon DynamoDB

- Tabelas criadas:
  - `Produtos`: PK = `idProduto`
  - `Usuarios`: PK = `email`
  - `Pedidos`: PK = `idPedido`, SK = `idUsuario`
- Auto scaling habilitado
- Índices secundários globais para buscas eficientes

---

## 🔐 4. Autenticação – Amazon Cognito

- Pool de usuários configurado com políticas de segurança:
  - Mínimo de 8 caracteres por senha
  - Confirmação via e-mail
- Autenticação federada desabilitada (opcional)
- Integração com API Gateway usando JWT tokens

---

## 🧭 Monitoramento

- Logs centralizados no Amazon CloudWatch Logs
- Métricas personalizadas por função Lambda
- Alertas configurados para erros de autenticação e falhas de invocação
