/**
 * GET /
 * Buskrhomepage page.
 */
exports.buskerRegister = (req, res) => {
    res.render('buskrRegister', {
      title: 'buskrRegister',
      full_title: 'Register as a busker'
    });
  };
  