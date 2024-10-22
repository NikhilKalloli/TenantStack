# TenantStack Hub API Documentation

## API Service

### Tenants

#### Create Tenant
- **POST** `/api/v1/tenants`
- **Body**: `{ "name": "Tenant Name", "description": "Tenant Description" }`
- **Response**: `{ "message": "Tenant created successfully", "tenant": { ... } }`

#### Get Tenant
- **GET** `/api/v1/tenants/:tenantId`
- **Response**: `{ "tenant": { ... } }`

#### Update Tenant
- **PUT** `/api/v1/tenants/:tenantId`
- **Body**: `{ "name": "Updated Tenant Name" }`
- **Response**: `{ "message": "Tenant updated successfully", "tenant": { ... } }`

#### Delete Tenant
- **DELETE** `/api/v1/tenants/:tenantId`
- **Response**: `{ "message": "Tenant deleted successfully" }`

### Users

#### Create User
- **POST** `/api/v1/users`
- **Body**: `{ "userId": "user123", "tenantId": "tenant123", "role": "admin" }`
- **Response**: `{ "message": "User created successfully", "user": { ... } }`

#### Get User
- **GET** `/api/v1/users/:userId`
- **Response**: `{ "user": { ... } }`

#### Update User
- **PUT** `/api/v1/users/:userId`
- **Body**: `{ "role": "editor" }`
- **Response**: `{ "message": "User updated successfully", "user": { ... } }`

#### Delete User
- **DELETE** `/api/v1/users/:userId`
- **Response**: `{ "message": "User deleted successfully" }`

### Quotas

#### Check Quota
- **GET** `/api/v1/quotas/:tenantId`
- **Response**: `{ "quotas": [ ... ] }`

#### Update Quota
- **PUT** `/api/v1/quotas/:tenantId`
- **Body**: `{ "resourceType": "api_calls", "limit": 10000, "used": 5000 }`
- **Response**: `{ "message": "Quota updated successfully", "quota": { ... } }`

## Tenant Manager Service

### Stacks

#### Create Stack
- **POST** `/stacks`
- **Body**: `{ "name": "Stack Name", "description": "Stack Description" }`
- **Response**: `{ "message": "Stack created successfully", "stack": { ... } }`

#### Update Stack
- **PUT** `/stacks/:stackId`
- **Body**: `{ "name": "Updated Stack Name", "description": "Updated Description" }`
- **Response**: `{ "message": "Stack updated successfully", "stack": { ... } }`

#### Delete Stack
- **DELETE** `/stacks/:stackId`
- **Response**: `{ "message": "Stack deleted successfully" }`

### Workflows

#### Create Workflow
- **POST** `/workflows`
- **Body**: `{ "name": "Workflow Name", "steps": [ ... ] }`
- **Response**: `{ "message": "Workflow created successfully", "workflow": { ... } }`

#### Update Workflow
- **PUT** `/workflows/:workflowId`
- **Body**: `{ "name": "Updated Workflow Name", "steps": [ ... ] }`
- **Response**: `{ "message": "Workflow updated successfully", "workflow": { ... } }`

## Auth Service

### Authentication

#### Login
- **POST** `/auth/login`
- **Body**: `{ "username": "user@example.com", "password": "password123" }`
- **Response**: `{ "token": "JWT_TOKEN" }`

#### Logout
- **POST** `/auth/logout`
- **Headers**: `Authorization: Bearer JWT_TOKEN`
- **Response**: `{ "message": "Logged out successfully" }`

### SSO

#### Initiate SSO
- **GET** `/sso/initiate`
- **Query**: `?provider=google`
- **Response**: Redirects to SSO provider

#### SSO Callback
- **GET** `/sso/callback`
- **Query**: `?code=AUTH_CODE`
- **Response**: `{ "token": "JWT_TOKEN" }`

## Audit Logger Service

### Logging

#### Log Activity
- **POST** `/log`
- **Body**: `{ "tenantId": "tenant123", "userId": "user123", "action": "create_content", "details": { ... } }`
- **Response**: `{ "message": "Activity logged successfully" }`

### Reporting

#### Generate Report
- **GET** `/report`
- **Query**: `?tenantId=tenant123&startDate=2023-01-01&endDate=2023-12-31`
- **Response**: `{ "logs": [ ... ] }`
