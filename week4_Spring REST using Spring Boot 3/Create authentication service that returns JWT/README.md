# Spring Boot JWT Authentication Service

## Endpoint

```
GET /authenticate
```

Use basic auth (user:pwd) to get a JWT.

### Example cURL:

```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

### Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```