const express= require('express');
const{graphqlHTTP}= require('express-graphql');
const{
    GraphQLSchema, GraphQLObjectType, GraphQLString,
    GraphQLInt, GraphQLBoolean, GraphQLFloat, GraphQLList,
    GraphQLNonNUll
}=require('graphql');
const {Sequelize, Datatypes}= require('sequelize');
const sequelize= new Sequelize('db_pasajeros', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})
const PasajeroModel= define.sequelize('Pasajero', {
    name: 'pasajero',
    fields()=>({
        ci: {Datatypes.INTEGER, primeryKey:true},
        nombres: Datatypes.STRING,
        apellidos: Datatypes.STRING,
        celular: Datatypes.INT,
        frecuente: Datatypes.BOOLEAN
    }),
},{tableName: 'pasajeros', timestamps:false});
const PasajeroType= new GraphQLObjectType({
    ci:{type: GraphQLInt},
    nombres:{type: GraphQLString},
    apellidos:{type: GraphQLString},
    celular:{type:GraphQLInt},
    frecuente:{type:GraphQLBoolean}
});
    
const RootQuery=new GraphQLObjectType({
    name: 'RootQuery',
    fields:{
        query{
            //PasajeroModel.findByPk(ci)
        }
        
    }
});
const Mutation= new GraphQLObjectType({
    name: 'mutation',
    fields:{
        registrarPasajero{
            if(ci>=5 && ci<=10){
                
            }
        }
    }
});

app.listen(3000, ()=>console.log('Corriendo en http://localhost:3000/graphql'));
const schema= new GraphQLSchema({query: RootQuery, mutation:Mutation});
app.use('/graphql', graphqlHTTP({schema, graphiql:true}));
/* const Algo=>{
    name: pasajeros
    fields:{0
*/    