module.exports = towelSort = (matrix) =>
    (matrix &&
        matrix.reduce(
            (acc, cur) => ({
                res: acc.res.concat(acc.rev ? cur.reverse() : cur),
                rev: !acc.rev,
            }),
            {
                res: [],
                rev: 0,
            }
        ).res) ||
    [];
