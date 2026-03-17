# API SPEC

## Base URL
`/api/notes`

## Endpoints

### Get All Notes
- **GET** `/`
- **Response:** `200 OK`
  ```json
  [
    {
        "id": "uuid",
        "title": "string",
        "content": "string",
        "image": "string (optional)",
        "createdAt": "ISO 8601 timestamp",
        "updatedAt": "ISO 8601 timestamp"
    }
  ]
  ```

### Get Single Note
- **GET** `/:id`
- **Response:** `200 OK`
  ```json
  {
    "id": "uuid",
    "title": "string",
    "content": "string",
    "image": "string (optional)",
    "createdAt": "ISO 8601 timestamp",
    "updatedAt": "ISO 8601 timestamp"
  }
  ```
- **Response:** `404 Not Found`

### Create Note
- **POST** `/`
- **Body:**
  ```json
  {
    "title": "string",
    "content": "string",
    "image": "string (optional)"
  }
  ```
- **Response:** `201 Created`
  ```json
  {
    "id": "uuid",
    "title": "string",
    "content": "string",
    "image": "string (optional)",
    "createdAt": "ISO 8601 timestamp",
    "updatedAt": "ISO 8601 timestamp"
  }
  ```

### Update Note
- **PATCH** `/:id`
- **Body:**
  ```json
  {
    "title": "string (optional)",
    "content": "string (optional)",
    "image": "string (optional)"
  }
  ```
- **Response:** `200 OK`
  ```json
  {
    "id": "uuid",
    "title": "string",
    "content": "string",
    "image": "string (optional)",
    "createdAt": "ISO 8601 timestamp",
    "updatedAt": "ISO 8601 timestamp"
  }
  ```
- **Response:** `404 Not Found`

### Delete Note
- **DELETE** `/:id`
- **Response:** `204 No Content`
- **Response:** `404 Not Found`
