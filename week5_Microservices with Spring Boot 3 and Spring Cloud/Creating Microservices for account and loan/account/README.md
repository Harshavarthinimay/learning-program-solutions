
# Account Microservice

Spring Boot microservice to return dummy account details.

## Endpoint

**GET** `/accounts/{number}`

### Sample Response
```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343
}
```

## Run
```bash
mvn clean install
mvn spring-boot:run
```
