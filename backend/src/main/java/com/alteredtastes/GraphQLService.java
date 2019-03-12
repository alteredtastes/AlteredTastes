package com.alteredtastes;

import com.alteredtastes.shared.Meal;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Path("/graphql")
public class GraphQLService {

    private List<Meal> meals = new ArrayList<Meal>();

    public GraphQLService() {
        meals.add(new Meal("Java beans",42.0f));
    }

    @GET
    @Path("/")
    @Produces({ "application/json" })
    public Response index() {
        return Response.ok()
                .entity(meals)
                .build();
    }

    @GET
    @Path("/{id}")
    @Produces({ "application/json" })
    public Response meal(@PathParam("id") int id) {
        return Response.ok()
                .entity(meals.get(id))
                .build();
    }
}