import { TextLink, Flex, Form, Text, Button } from '@contentful/f36-components';
import { styles } from './EntityForm.styles';
import SearchBar from 'components/stacks/common/SearchBar/SearchBar';
import EntityCardList from '../EntityCardList/EntityCardList';
import { Entity, SELECT_TYPE } from '../Entity.types';
import { useState } from 'react';
import { SearchParams } from 'components/stacks/common/SearchBar/SearchBar.types';

export interface Props<T> {
    entityType: string;
    selectType: SELECT_TYPE;
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
        if (!isMultiSelect()) {
            if (selected.title === item.title) {
                setSelected({} as Entity);
            } else {
                setSelected(item);
            }

            return;
        }

        if (selectedMultiple.length !== 0) {
            const index = selectedMultiple.findIndex((e: Entity) => e.title === item.title);
            if (index > -1) {
                const newList = selectedMultiple.filter((e: Entity) => e.title !== item.title);
                setSelectedMultiple(newList);
            } else {
                setSelectedMultiple([...selectedMultiple, item]);
            }

            return;
        }

        setSelectedMultiple([item]);
    }

    const clearSelected = () => {
        if (isMultiSelect()) {
            setSelectedMultiple([])
        } else {
            setSelected({} as Entity)
        }
    }

    const listContent = showSelected ? isMultiSelect() ? selectedMultiple : [selected] : searchableList;

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
                <Flex className={styles.controls} alignItems='center' justifyContent='space-between'>
                    <TextLink onClick={() => setShowSelected(!showSelected)}>
                        {showSelected ? 'Show all' : `Show Selected ${isMultiSelect() ? '(' + selectedMultiple.length + ')' : ''}`}
                    </TextLink>
                    <TextLink onClick={clearSelected}>
                        Clear Selected
                    </TextLink>
                </Flex>
                <Flex className={styles.searchResults}>

                    <EntityCardList
                        entityType={entityType}
                        list={listContent}
                        selected={isMultiSelect() ? selectedMultiple : [selected]}
                        onSelect={onSelect}
                        selectType={selectType} />

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