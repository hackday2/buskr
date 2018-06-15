/**
 * GET /
 * Donate Button.
 */
exports.donateButton = (req, res) => {
  res.render('donateButton', {
    title: 'Donat Button'
  });
};
