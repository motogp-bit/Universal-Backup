type Config = typeof import('./config/config-example');

type Room = Rooms.Room;
namespace Rooms {
    export type Room = import('./rooms').Room;
}

type RoomGame = RoomGame.RoomGame;
type RoomGamePlayer = RoomGame.RoomGamePlayer;
namespace RoomGame {
    export type RoomGame = import('./room-game').RoomGameT;
    export type RoomGamePlayer = import('./room-game').RoomGamePlayerT;
}

type MafiaTracker = Mafia.Tracker;
type MafiaISO = Mafia.ISO;
type MafiaCooldown = Mafia.Cooldown;
namespace Mafia {
    export type Tracker = import('./mafia').MafiaTrackerType;
    export type ISO = import('./plugins/iso').ISOT;
    export type Cooldown = import('./plugins/mafiacooldown').MafiaCooldownT;
}