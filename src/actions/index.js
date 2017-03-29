export function selectBook(book) {
    //selectBook is an action creator and needs to return an action - an object with a property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}