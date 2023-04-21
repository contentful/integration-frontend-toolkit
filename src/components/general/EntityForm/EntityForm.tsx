import { Caption, TextLink, Flex, Form, Paragraph, Text, Button } from '@contentful/f36-components';
import { styles } from './EntityForm.styles';
import SearchBar from 'components/stacks/common/SearchBar/SearchBar';
import EntityCardList from '../EntityCardList/EntityCardList';
import { Entity } from '../Entity.types';
import { useEffect, useState } from 'react';
import { SearchParams } from 'components/stacks/common/SearchBar/SearchBar.types';


export interface Props<T> {
    entityType: string;
    list: T[];
    onCancel?: () => void;
    onSubmit?: () => void;
}


const EntityForm = <T extends Entity>(props: Props<T>) => {
    const { entityType, list, onCancel, onSubmit } = props;
    const [searchableList, setSearchableList] = useState(list)
    const [selected, setSelected] = useState([] as Entity[]);
    const [showSelected, setShowSelected] = useState(false)
    const onSearch = (searchQuery: SearchParams) => {
        const newList = searchQuery.searchValue ? searchableList.filter((entity: Entity) => {
            return entity.title.toLowerCase().includes(searchQuery.searchValue.toLowerCase());
        }) : list

        setSearchableList(newList)
    }

    const onSelect = (item: Entity) => {
        if (selected.length === 0) {
            setSelected([item])
        } else {
            const index = selected.findIndex((e: Entity) => e.title === item.title);
            if (index > -1) {
                const newList = selected.filter((e: Entity) => e.title !== item.title)
                setSelected(newList)
            } else {
                setSelected([...selected, item])
            }
        }
    }

    return (
        <div className={styles.root} id='EntityForm'>

            <Form onSubmit={onSubmit}>
                <Flex className={styles.heading} alignItems='center' justifyContent='space-between'>
                    <Text >Search for a {entityType}: </Text>
                    <TextLink onClick={() => setShowSelected(!showSelected)}>
                        {showSelected ? 'Show all' : `Show Selected (${selected.length})`}
                    </TextLink>
                </Flex>
                <Flex className={styles.searchBox} data-test-id="search-bar">
                    <SearchBar
                        onSearch={onSearch}
                        placeholder={`Type to search for ${entityType}s`}
                        searchTitle={`Search for ${entityType}s`}
                    />
                </Flex>

                {showSelected &&
                    <Flex className={styles.searchResults}>
                        <EntityCardList entityType={entityType} list={selected} selected={selected} />
                    </Flex>
                }
                {!showSelected &&
                    <Flex className={styles.searchResults}>
                        <EntityCardList entityType={entityType} list={searchableList} selected={selected} onSelect={onSelect} />
                    </Flex>
                }

                <Flex className={styles.actions} alignItems='center' justifyContent='flex-end'>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button variant="primary" type="submit" isDisabled={!selected.length}>Select {entityType}s</Button>
                </Flex>
            </Form>
        </div>
    );
}

export default EntityForm;