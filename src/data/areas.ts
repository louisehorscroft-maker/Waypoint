/**
 * Areas Waypoint welcomes young people from (confirmed by Lou). Waypoint is based in
 * Shoreham-by-Sea; these are the places it wants to be found for. Only add an area Wes confirms.
 */
export const areas = ['Shoreham-by-Sea', 'Lancing', 'Worthing', 'Brighton and Hove'];

/** "Shoreham-by-Sea, Lancing, Worthing, Brighton and Hove and across West Sussex" */
export const areasText = `${areas.join(', ')} and across West Sussex`;

/** Same list with the short "Shoreham", for sentences that already say Shoreham-by-Sea */
export const nearbyText = `Shoreham, ${areas.slice(1).join(', ')} and across West Sussex`;
