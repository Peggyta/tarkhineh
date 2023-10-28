const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
const sp = (number) => {
    const seperatedNumber = number
      .toString()
      .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
      .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
    const joinedNumber = seperatedNumber.join(",");
    return e2p(joinedNumber);
  };

  export { sp, e2p };