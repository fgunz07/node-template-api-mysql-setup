# node-template-api-mysql-setup

```javascript
  npm install
```

### Generate a model
```javascript
  yarn run gmodel --name <Model Name> --attributes name:string
```

### Generate a migration 
```javascript
  yarn run gmigration --name <Model Name> --attributes name:string
```

### Generate a seeder
```javascript
  yarn run gseeder --name <Model Name> --attributes name:string
```

### Migrate pending migrations
```javascript
  yarn run migrate
```

### Seed peding seeders
```javascript
  yarn run seed
```
