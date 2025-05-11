# Coupon Service

A NestJS-based microservice for managing coupons and promotions.

## Features

- List coupons with pagination
- Get coupon by ID
- Create new coupons
- Validate coupon availability
- Redeem coupons

## API Endpoints

### List Coupons
- **GET** `/coupon`
- Query Parameters:
  - `page` (default: 1)
  - `limit` (default: 10)
- Returns paginated list of coupons with metadata

### Get Coupon by ID
- **GET** `/coupon/:id`
- Returns coupon details if found

### Create Coupon
- **POST** `/coupon`
- Body:
  ```json
  {
    "code": "string",
    "type": "string",
    "value": "number",
    "start_date": "date",
    "end_date": "date",
    "limit": "number",
    "used": "boolean",
    "products": ["productId1", "productId2"]
  }
  ```

### Validate Coupon
- **GET** `/coupon/validate/:code`
- Validates if a coupon is:
  - Active (within start and end dates)
  - Not used
  - Exists

### Redeem Coupon
- **POST** `/coupon/redeem/:coupon`
- Marks a coupon as used

## Error Handling

The service handles various error cases:
- Invalid coupon codes
- Duplicate coupon codes
- Invalid product references
- Not found errors

## Dependencies

- NestJS
- Prisma
- UUID
- Product Service (external dependency)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up your database connection

3. Run migrations:
```bash
npx prisma migrate dev
```

4. Start the service:
```bash
npm run start:dev
```