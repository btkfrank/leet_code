/*
 * [876] Hand of Straights
 *
 * https://leetcode.com/problems/hand-of-straights/description/
 *
 * algorithms
 * Medium (42.17%)
 * Total Accepted:    3.4K
 * Total Submissions: 8.2K
 * Testcase Example:  '[1,2,3,6,2,3,4,7,8]\n3'
 *
 * Alice has a hand of cards, given as an array of integers.
 *
 * Now she wants to rearrange the cards into groups so that each group is size
 * W, and consists of W consecutive cards.
 *
 * Return true if and only if she can.
 *
 *
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
 * Output: true
 * Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].
 *
 * Example 2:
 *
 *
 * Input: hand = [1,2,3,4,5], W = 4
 * Output: false
 * Explanation: Alice's hand can't be rearranged into groups of 4.
 *
 *
 *
 * Note:
 *
 *
 * 1 <= hand.length <= 10000
 * 0 <= hand[i] <= 10^9
 * 1 <= W <= hand.length
 *
 */
/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
    if(hand.length%W !== 0){
        return false;
    }else{
        hand.sort(((a, b)=> a - b));
        return pick(hand, W);
    }
};

function pick(hand, W){
    let first = hand.splice(0,1)[0];
    if(pickOne(hand, W-1, first+1)){
        if(hand.length === 0){
            return true;
        }else {
            return pick(hand, W);
        }
    }else{
        return false;
    }
}

function pickOne(hand, W, item){
    if(W === 0){
        return true;
    }
    const itemIndex = hand.indexOf(item);
    if(itemIndex >= 0){
        W = W -1;
        hand.splice(itemIndex, 1);
        if(W === 0){
            return true;
        }else{
            return pickOne(hand, W, item+1);
        }
    }else{
        return false;
    }
}

console.log(isNStraightHand([1,2,3], 1));