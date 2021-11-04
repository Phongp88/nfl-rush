const graphql = require("graphql");
const _ = require("lodash");
const footballPlayer = require("../models/footballPlayer");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLSchema,
} = graphql;

const FootballPlayer = new GraphQLObjectType({
  name: "PlayerData",
  fields: () => ({
    id: { type: GraphQLID },
    player: { type: GraphQLString },
    team: { type: GraphQLString },
    position: { type: GraphQLString },
    att: { type: GraphQLFloat },
    attG: { type: GraphQLFloat },
    yds: { type: GraphQLInt },
    avg: { type: GraphQLFloat },
    ydsG: { type: GraphQLFloat },
    td: { type: GraphQLFloat },
    lng: { type: GraphQLString },
    player1st: { type: GraphQLFloat },
    player1stP: { type: GraphQLFloat },
    player20: { type: GraphQLFloat },
    player40: { type: GraphQLFloat },
    FUM: { type: GraphQLFloat },
  }),
});

const DocumentCount = new GraphQLObjectType({
  name: "DocumentCount",
  fields: () => ({
    count: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    countPlayer: {
      type: DocumentCount,
      args: {
        player: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const count = await footballPlayer.countDocuments({
          ...(args.player && { player: new RegExp(args.player) }),
        });

        return {
          count,
        };
      },
    },
    player: {
      type: new graphql.GraphQLList(FootballPlayer),
      args: {
        player: { type: GraphQLString },
        sort: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt },
        stat: { type: GraphQLString },
      },
      resolve(parent, args) {
        // Default sort by player
        const sortParams = { player: args.sort };
        if (args.stat) {
          // Remove Player name if stats is sorted
          sortParams[args.stat] = args.sort;
          delete sortParams.player;
        }
        return footballPlayer
          .find({
            ...(args.player && { player: new RegExp(args.player, "i") }),
          })
          .limit(args.limit)
          .sort(sortParams)
          .collation({ locale: "en_US", numericOrdering: true })
          .skip(args.offset)
          .then((players) => {
            return players;
          })
          .catch((err) => {
            console.log(err);
            return "error occured";
          });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPlayer: {
      type: FootballPlayer,
      args: {
        player: { type: GraphQLString },
        team: { type: GraphQLString },
        position: { type: GraphQLString },
        att: { type: GraphQLFloat },
        attG: { type: GraphQLFloat },
        yds: { type: GraphQLString },
        avg: { type: GraphQLFloat },
        ydsG: { type: GraphQLFloat },
        td: { type: GraphQLFloat },
        lng: { type: GraphQLString },
        player1st: { type: GraphQLFloat },
        player1stP: { type: GraphQLFloat },
        player20: { type: GraphQLFloat },
        player40: { type: GraphQLFloat },
        FUM: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        let newPlayer = new footballPlayer({
          player: args.player,
          team: args.team,
          position: args.position,
          att: args.att,
          attG: args.attG,
          yds: args.yds,
          avg: args.avg,
          ydsG: args.ydsG,
          td: args.td,
          lng: args.lng,
          player1st: args.player1st,
          player1stP: args.player1stP,
          player20: args.player20,
          player40: args.player40,
          FUM: args.FUM,
        });
        return newPlayer.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
