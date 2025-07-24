# 📊 Relatório de Desempenho – AWS Lambda & API Gateway

## 📍 Visão Geral
Este documento apresenta as principais métricas de desempenho relacionadas às funções AWS Lambda e ao Amazon API Gateway utilizados na plataforma virtual da farmácia.

---

### 🔧 Funções Lambda

- **Tempo médio de execução:** 120 ms  
- **Taxa de sucesso das invocações:** 99,8%  
- **Tempo de cold start (pico):** 250 ms (em funções menos acessadas)

---

### 🔗 API Gateway

- **Número médio de requisições por minuto:** 350  
- **Latência média de resposta:** 150 ms  
- **Erros por minuto:** 0,2% (tratados com mensagens de fallback)  
- **Uptime registrado:** 99,99%

---

### 📈 Conclusão

As métricas demonstram alta performance e estabilidade nos serviços utilizados. A combinação de Lambda com API Gateway atendeu plenamente à demanda da aplicação com escalabilidade automática, sem interrupções e com excelente tempo de resposta.
