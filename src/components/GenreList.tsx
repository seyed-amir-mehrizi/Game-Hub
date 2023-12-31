import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
    const { data, isLoading, error } = useGenre();

    if (isLoading) return <Spinner />
    if (error) return null;
    return (
        <>
        <Heading fontSize={'2xl'} marginBottom={3}>Genre</Heading>        
        <List>
            {data.map((g) => {
                return <ListItem key={g.id} paddingY={'5px'}>
                    <HStack>
                        <Image boxSize={'32px'}
                            borderRadius={'8px'}
                            src={getCroppedImageUrl(g.image_background)}
                            objectFit={"cover"}
                        />
                        <Button textAlign={'left'} whiteSpace={'normal'} fontWeight={(g.id === selectedGenre?.id) ? 'bold' : ''} fontSize='lg' variant='link' onClick={() => onSelectGenre(g)}>
                            {g.name}
                        </Button>
                    </HStack>
                </ListItem>
            })}
        </List>
        </>
    )
}

export default GenreList