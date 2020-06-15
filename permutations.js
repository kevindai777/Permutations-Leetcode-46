//Given a 1-D array of integers, give a 2-D array of all possible permutations
//of the given array.

let nums = [1,2,3]


//O(O(∑ (k=1N) P(N,k)) where P(N, k) = {N!}/{(N - k)!} = N (N - 1) ... (N - k + 1)

//Here we have a temp array to hold our different permutations from the given array
//Once we exhaust the values from the given array, we push that permutation into the output array
let temp = []
let output = []

function helper(temp, nums, output) {
    if (nums.length == 0) {
        output.push(temp.slice())
        return
    }

    for (let i = 0; i < nums.length; i++) {
        //push in the value into the temp array
        temp.push(nums[i])

        //remove the value from the given array and permute w/ new array
        nums.splice(i, 1)
        helper(temp, nums, output)

        //Once done, we put the value back into the array for later permutations
        nums.splice(i, 0, temp.pop())
    }
}
helper(temp, nums, output)

return output