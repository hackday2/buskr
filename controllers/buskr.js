/**
 * GET /
 * Buskrhomepage page.
 */
exports.buskerhome = (req, res) => {
  res.render('buskr-register', {
    title: 'buskr-register',
    full_title: 'Edinburgh Busker finder',
    date_test: new Date()
  });
};
