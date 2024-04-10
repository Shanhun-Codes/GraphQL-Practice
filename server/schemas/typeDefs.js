export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    } 
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        author_id: String!
        game_id: String!
        game: Game!
        author: Author!
    }
    type Query {
        games: [Game!]!
        game(id: ID!): Game!
        authors: [Author!]!
        author(id: ID!): Author!
        reviews: [Review!]!
        review(id: ID!): Review!
    }
    type Mutation {
        addGame(game: addGameInput!): Game
        editGame(id: ID!, edits: editGameInput!): Game
    }
    input addGameInput {
        title: String!
        platform: [String!]!
    }
    input editGameInput {
        title: String
        platform: String
    }
`