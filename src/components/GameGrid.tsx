
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
function GameGrid() {
    const { error, games, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6 , 7 , 8];
    return (
        <>
            {
                error && <Text>{error}</Text>
            }
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} spacing={10}>
                {
                    isLoading && skeletons.map((s=>{
                       return <GameCardSkeleton key={s}/>
                    }))
                }
                {
                    games.map((game) => {
                        return <GameCard key={game.id} game={game} />
                    })
                }
            </SimpleGrid>
        </>
    )
}
export default GameGrid