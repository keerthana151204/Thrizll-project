import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Gamepad2, Trophy, Clock, Heart, Star, Users, Play, RotateCcw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function MemoryGames() {
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameStats, setGameStats] = useState({
    gamesPlayed: 12,
    totalScore: 2850,
    bestStreak: 8,
    favoriteGame: "Photo Timeline"
  });

  const games = [
    {
      id: "photo-match",
      title: "Photo Memory Match",
      description: "Match photos from your shared adventures",
      difficulty: "Easy",
      duration: "5-10 min",
      players: "1-2",
      icon: "🖼️",
      status: "active"
    },
    {
      id: "date-guess",
      title: "Date Detective", 
      description: "Guess when special moments happened",
      difficulty: "Medium",
      duration: "10-15 min",
      players: "2",
      icon: "📅",
      status: "active"
    },
    {
      id: "story-complete",
      title: "Story Completion",
      description: "Finish each other's memory stories",
      difficulty: "Medium",
      duration: "15-20 min", 
      players: "2",
      icon: "📝",
      status: "active"
    },
    {
      id: "location-quiz",
      title: "Location Challenge",
      description: "Identify where memories were made",
      difficulty: "Hard",
      duration: "10-15 min",
      players: "1-2", 
      icon: "🗺️",
      status: "active"
    }
  ];

  const memoryCards = [
    { id: 1, image: "Beach sunset", matched: false, flipped: false },
    { id: 2, image: "Coffee date", matched: false, flipped: false },
    { id: 3, image: "Park picnic", matched: false, flipped: false },
    { id: 4, image: "Movie night", matched: false, flipped: false },
    { id: 5, image: "Beach sunset", matched: false, flipped: false },
    { id: 6, image: "Coffee date", matched: false, flipped: false }
  ];

  const [cards, setCards] = useState(memoryCards);

  const startGame = (gameId: string) => {
    setCurrentGame(gameId);
    setScore(0);
    const game = games.find(g => g.id === gameId);
    toast.success(`🎮 Starting ${game?.title}! Let the memory games begin.`);
  };

  const flipCard = (cardId: number) => {
    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, flipped: !card.flipped } : card
    ));
  };

  const resetGame = () => {
    setCurrentGame(null);
    setCards(memoryCards);
    setScore(0);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-500/20 text-green-700 dark:text-green-300";
      case "Medium": return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300";
      case "Hard": return "bg-red-500/20 text-red-700 dark:text-red-300";
      default: return "bg-gray-500/20 text-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gamepad2 className="w-4 h-4" />
              Phase 3: Advanced Magic
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-6">
              Memory Matching Games
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Turn your shared memories into fun, interactive games. Challenge each other and rediscover forgotten moments through play.
            </p>
          </div>

          {!currentGame ? (
            <>
              {/* Game Stats */}
              <Card className="p-6 mb-8 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Your Memory Game Stats
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{gameStats.gamesPlayed}</div>
                    <div className="text-sm text-muted-foreground">Games Played</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{gameStats.totalScore}</div>
                    <div className="text-sm text-muted-foreground">Total Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{gameStats.bestStreak}</div>
                    <div className="text-sm text-muted-foreground">Best Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-primary">{gameStats.favoriteGame}</div>
                    <div className="text-sm text-muted-foreground">Favorite Game</div>
                  </div>
                </div>
              </Card>

              {/* Game Selection */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                {games.map((game) => (
                  <Card key={game.id} className="p-6 bg-card/80 backdrop-blur-sm hover:shadow-memory transition-memory border-border/50 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{game.icon}</div>
                      <Badge className={getDifficultyColor(game.difficulty)}>
                        {game.difficulty}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                    <p className="text-muted-foreground mb-4">{game.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{game.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{game.players} players</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => startGame(game.id)}
                      variant="heart" 
                      className="w-full gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Start Game
                    </Button>
                  </Card>
                ))}
              </div>

              {/* Recent Achievements */}
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-primary" />
                  Recent Achievements
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="font-semibold">Memory Master</div>
                    <div className="text-sm text-muted-foreground">Completed 10 games</div>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="font-semibold">Speed Demon</div>
                    <div className="text-sm text-muted-foreground">5-game winning streak</div>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl mb-2">💝</div>
                    <div className="font-semibold">Memory Keeper</div>
                    <div className="text-sm text-muted-foreground">Unlocked 50 memories</div>
                  </div>
                </div>
              </Card>
            </>
          ) : (
            /* Game Interface - Photo Memory Match */
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">Photo Memory Match</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{score}</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={resetGame} className="gap-2">
                      <RotateCcw className="w-4 h-4" />
                      New Game
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => flipCard(card.id)}
                      className={`aspect-square rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center text-center p-4 ${
                        card.flipped || card.matched
                          ? 'bg-primary/20 border-primary/30'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {card.flipped || card.matched ? (
                        <div>
                          <div className="text-2xl mb-2">📷</div>
                          <div className="text-sm font-medium">{card.image}</div>
                        </div>
                      ) : (
                        <div className="text-4xl">❓</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="text-center text-muted-foreground">
                  <p>Match pairs of photos from your shared memories!</p>
                  <p className="text-sm mt-1">Click cards to flip them and find matching pairs</p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}