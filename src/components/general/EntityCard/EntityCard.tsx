import React from 'react';
import { EntryCard } from '@contentful/f36-components';
import { styles } from './EntityCard.styles';
import Placeholder from './assets/placeholder.png';
import { Entity } from '../Entity.types';

export interface Props extends Entity {
    className?: string,
    entityType: string;
    contentType?: string,
    loading?: boolean;
    withDragHandle?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const isMissingData = (title?: string): boolean => {
    return !title;
}

const EntityCard = (props: Props) => {
    const { title, contentType, loading, entityType, thumbnail, className } = props;
    const card = isMissingData(title) ?
        <EntryCard
            contentType={contentType}
            status='deleted'
            title={`${entityType} Missing`}
            description={`This ${entityType} is missing. It may have been deleted or moved.`}
            isLoading={loading}
            data-test-id="missing" />
        :
        <EntryCard
            {...props}
            isLoading={loading}
            thumbnailElement={<img alt="Thumbnail" src={thumbnail || Placeholder} />}
        />

    return (
        <div className={`${styles.root} ${className}`} id="EntityCard">
            {card}
        </div>
    );
}

export default EntityCard;
