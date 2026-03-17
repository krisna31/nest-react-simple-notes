# API SPEC

## Base URL
`/api/notes`

## Endpoints

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
    "id": "autoincrement",
    "title": "string",
    "content": "string",
    "image": "string (optional)",
    "createdAt": "ISO 8601 timestamp",
    "updatedAt": "ISO 8601 timestamp"
  }
  ```

### Get All Notes
- **GET** `/`
- **Response:** `200 OK`
  ```json
  [
    {
        "id": "autoincrement",
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
    "id": "autoincrement",
    "title": "string",
    "content": "string",
    "image": "string (optional)",
    "createdAt": "ISO 8601 timestamp",
    "updatedAt": "ISO 8601 timestamp"
  }
  ```
- **Response:** `404 Not Found`

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
    "id": "autoincrement",
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
