import express  from "express";
import bodyParser from "body-parser";
import dotenv from"dotenv";
import cors from"cors";
import morgan  from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
//import routes
import todoRoutes from "./Routes/todoRoute";
import productsRoutes from "./Routes/productsRoutes";
import clientRoute from "./Routes/clientRoute";
const app = express();
dotenv.config();

// swagger configration
const options ={
    definition: {
      openapi : '3.0.0',
      info : {
        title: ' Backend Documentation of toDo App and E-Commerce:',
        description:'My Apps',
        version: '1.0.0',
      },
      servers:[
        {
    
          url: 'http://localhost:3100/'
  
      
        }
      ],
      security:[
        {
  BearerAuth:[],
        }
      ],
      components:{
        securitySchemes:{
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      }
    },
    apis: ['./src/documentation/*.js'], //determination of path
  }
  const swaggerSpec = swaggerJSDoc(options)
  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
// Required app to imported configration
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// Determination of routes
app.use("/todoApp/",todoRoutes);
app.use("/products/",productsRoutes);
app.use("/client", clientRoute);

export default app;


  

