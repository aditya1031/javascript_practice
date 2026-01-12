function Transpose(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new Error("Input must be a non-empty 2D array");
    }1    
}