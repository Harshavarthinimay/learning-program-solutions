
# Loan Microservice

Spring Boot microservice to return dummy loan details.

## Endpoint

**GET** `/loans/{number}`

### Sample Response
```json
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000,
  "emi": 3258,
  "tenure": 18
}
```

## Run
```bash
mvn clean install
mvn spring-boot:run
```
