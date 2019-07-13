class AppUtility {
  removeSpecialChar(string = '') {
    string = string.replace('&', 'and');
    return string.replace(/[^-_a-zA-Z0-9 ]/g, '');
  }

  toKebabCase(string = '') {
    string = this.removeSpecialChar(string);
    return this.kebabSnakeCaseBase(string).replace(/ /g, '-');
  }

  toSnakeCase(string = '') {
    string = this.removeSpecialChar(string);
    return this.kebabSnakeCaseBase(string).replace(/ /g, '_');
  }

  toCamalCase(string = '') {
    string = this.removeSpecialChar(string);
    string = this.titleCamalCaseBase(string);
    return `${string[0].toLowerCase()}${string.substring(1)}`;
  }

  toTitleCase(string = '') {
    string = this.removeSpecialChar(string);
    string = this.titleCamalCaseBase(string);
    return `${string[0].toUpperCase()}${string.substring(1)}`;
  }

  kebabSnakeCaseBase(string = '') {
    return string
      .replace(/_/g, ' ')
      .replace(/-/g, ' ')
      .split('')
      .reduce(
        (str, char) =>
          char.toUpperCase() === char ? `${str} ${char}` : `${str}${char}`,
        ''
      )
      .trim()
      .replace(/ * /g, ' ')
      .toLowerCase();
  }

  titleCamalCaseBase(string = '') {
    return string
      .replace(/(-\w)/g, m => m[1].toUpperCase())
      .replace(/(_\w)/g, m => m[1].toUpperCase())
      .replace(/( * \w)/g, m => m[1].toUpperCase())
      .replace(/_/g, ' ')
      .replace(/-/g, ' ')
      .trim();
  }
}

export default new AppUtility();
