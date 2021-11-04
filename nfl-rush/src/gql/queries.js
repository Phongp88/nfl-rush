import { gql } from "@apollo/client";
const FETCH_PLAYER = gql`
  query player(
    $player: String
    $sort: Int
    $limit: Int
    $offset: Int
    $stat: String
  ) {
    player(
      player: $player
      sort: $sort
      limit: $limit
      offset: $offset
      stat: $stat
    ) {
      player
      team
      position
      att
      attG
      yds
      avg
      ydsG
      td
      lng
      player1st
      player1stP
      player20
      player40
      FUM
    }
    countPlayer(player: $player) {
      count
    }
  }
`;

export { FETCH_PLAYER };
