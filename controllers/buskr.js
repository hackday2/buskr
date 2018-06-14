/**
 * GET /
 * Buskrhomepage page.
 */
exports.buskerhome = (req, res) => {
  res.render('buskr', {
    title: 'buskr',
    full_title: 'Edinburgh Busker finder',
    date_test: new Date()
  });
};
