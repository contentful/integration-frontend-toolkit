import { TextLink, Flex, Form, Text, Button } from '@contentful/f36-components';
import { styles } from './EntityForm.styles';
import SearchBar from 'components/stacks/common/SearchBar/SearchBar';
import EntityCardList from '../EntityCardList/EntityCardList';
import { Entity } from '../Entity.types';
import { useState } from 'react';
import { SearchParams } from 'components/stacks/common/SearchBar/SearchBar.types';

const SELECT_TYPE = {
    MULTIPLE: 'multiple',
    SINGLE: 'single'
}


export interface Props<T> {
    entityType: string;
    selectType: 'multiple' | 'single';
    list: T[];
    onCancel?: () => void;
    onSubmit?: (selected: Entity | Entity[]) => void;
}


const EntityForm = <T extends Entity>(props: Props<T>) => {
    const { entityType, selectType, list, onCancel, onSubmit } = props;
    const [searchableList, setSearchableList] = useState<Entity[]>(list)
    const [selected, setSelected] = useState<Entity>({} as Entity);
    const [selectedMultiple, setSelectedMultiple] = useState<Entity[]>([]);
    const [showSelected, setShowSelected] = useState(false)
    const onSearch = (searchQuery: SearchParams) => {
        const newList = searchQuery.searchValue ? searchableList.filter((entity: Entity) => {
            return entity.title.toLowerCase().includes(searchQuery.searchValue.toLowerCase());
        }) : list

        setSearchableList(newList)
    }

    const isMultiSelect = (): boolean => {
        return selectType === SELECT_TYPE.MULTIPLE;
    }

    const isDisabled = (): boolean => {
        return isMultiSelect() ? selectedMultiple.length === 0 : !selected.title
    }

    const onSelect = (item: Entity) => {
        if (isMultiSelect()) {

            if (selectedMultiple.length === 0) {
                setSelectedMultiple([item])
            } else {
                const index = selectedMultiple.findIndex((e: Entity) => e.title === item.title);
                if (index > -1) {
                    const newList = selectedMultiple.filter((e: Entity) => e.title !== item.title)
                    setSelectedMultiple(newList)
                } else {
                    setSelectedMultiple([...selectedMultiple, item])
                }
            }
        } else {
            if (selected.title === item.title) {
                setSelected({} as Entity)
            } else {
                setSelected(item);
            }
        }
    }

    const clearSelected = () => {
        if (isMultiSelect()) {
            setSelectedMultiple([])
        } else {
            setSelected({} as Entity)
        }
    }

    return (
        <div className={styles.root} id='EntityForm'>

            <Form onSubmit={() => onSubmit && onSubmit(isMultiSelect() ? selectedMultiple : selected)}>
                <Flex className={styles.heading} alignItems='center' justifyContent='space-between'>
                    <Text id="search-input-helptext">Search for a {entityType}: </Text>

                </Flex>
                <Flex className={styles.searchBox} data-test-id="search-bar">
                    <SearchBar
                        onSearch={onSearch}
                        placeholder={`Type to search for ${entityType}s`}
                        searchTitle={`Search for ${entityType}s`}
                    />
                </Flex>
                <Flex alignItems='center' justifyContent='space-between'>
                    <TextLink onClick={() => setShowSelected(!showSelected)}>
                        {showSelected ? 'Show all' : `Show Selected (${selectedMultiple.length})`}
                    </TextLink>
                    <TextLink onClick={clearSelected}>
                        Clear Selected
                    </TextLink>
                </Flex>
                <Flex className={styles.searchResults}>

                    {showSelected &&
                        <EntityCardList
                            entityType={entityType}
                            list={isMultiSelect() ? selectedMultiple : [selected]}
                            selected={isMultiSelect() ? selectedMultiple : [selected]}
                            selectType={selectType} />
                    }
                    {!showSelected &&
                        <EntityCardList
                            entityType={entityType}
                            list={searchableList}
                            selected={isMultiSelect() ? selectedMultiple : [selected]}
                            onSelect={onSelect}
                            selectType={selectType} />

                    }
                </Flex>
                <Flex className={styles.actions} alignItems='center' justifyContent='flex-end'>
                    {onCancel && <Button onClick={onCancel}>Cancel</Button>}
                    {onSubmit &&
                        <Button
                            variant="primary"
                            type="submit"
                            isDisabled={isDisabled()}>Select {entityType}s</Button>
                    }
                </Flex>
            </Form>
        </div>
    );
}

export default EntityForm;