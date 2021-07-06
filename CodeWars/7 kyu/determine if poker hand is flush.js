function isFlush(cards) {
    return new Set(cards.map(card => card[card.length - 1])).size === 1
}