/**
 * GET /
 * Buskrhomepage page.
 */
exports.buskerRegister = (req, res) => {
  res.render('buskr-register', {
    title: 'buskrRegister',
    full_title: 'Register as a busker'
  });
};

