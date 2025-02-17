# TenantStack Hub

TenantStack Hub is a multi-tenant content management platform built on top of Contentstack. It provides a scalable and flexible solution for managing multiple clients (tenants) within a single system, each with their own content stack.

## Architecture

The project is built using a microservices architecture, consisting of the following services:

1. API Service
2. Tenant Manager Service
3. Auth Service
4. Audit Logger Service

Each service is containerized using Docker and orchestrated with Docker Compose.

## Key Features

- Multi-tenant content management using Contentstack
- Tenant isolation and management
- User authentication and authorization
- Quota management for tenants
- Audit logging for system activities

## Real-World Use Case

TenantStack Hub is designed for businesses that need to manage multiple clients, each requiring their own content management system. For example:

- A digital agency managing websites for multiple clients
- A SaaS platform providing white-labeled content management solutions
- An enterprise with multiple brands or departments requiring separate content stacks

By leveraging Contentstack's powerful content management capabilities and combining it with our multi-tenant architecture, TenantStack Hub allows for:

1. Efficient resource utilization
2. Centralized management of multiple content stacks
3. Customization and isolation for each tenant
4. Scalability to handle a growing number of tenants

## Contentstack Integration

TenantStack Hub uses Contentstack as the core content management system. The Tenant Manager service interacts with Contentstack's Management API to:

- Create new stacks for each tenant
- Manage and update existing stacks
- Delete stacks when tenants are removed

This integration allows each tenant to have a fully-featured content management system powered by Contentstack, while the TenantStack Hub platform manages the overall multi-tenant architecture.

## Setup and Installation

1. Clone the repository:   ```
   git clone https://github.com/NikhilKalloli/tenantstack-hub.git
   cd tenantstack-hub   ```

2. Run the setup script:   ```
   npm run setup   ```

3. Update the `.env` file with your actual values.

4. Start the services:   ```
   npm run start   ```
