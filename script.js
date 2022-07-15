import SelectionArea from "https://cdn.jsdelivr.net/npm/@viselect/vanilla/lib/viselect.esm.js"

const selection = new SelectionArea({
    selectables: [".center > div"], /* Here what you want to select: #id, .class, or tag. if u want to select something in something, use > to separate */
});

/* When starting to select remove other selections */
selection.on('start', ({store, event}) => {
    if (!event.ctrlKey && !event.metaKey) {
        for (const el of store.stored) {
            el.classList.remove('selected');
        }

        selection.clearSelection();
    }
})

/* Add selected class to selected elements */
selection.on('move', ({store: {changed: {added, removed}}}) => {
    for (const el of added) {
        el.classList.add('selected');
    }
    console.log(added, removed);

    for (const el of removed) {
        el.classList.remove('selected');
    }
})

/* Remove selection on click */
selection.on('beforestart', ({ store, event }) => {
    for (const el of store.stored) {
        el.classList.remove('selected');
    }
    console.log(store.stored);
})