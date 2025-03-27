![YasogaN](https://socialify.git.ci/YasogaN/protobuf-doc/image?description=1&descriptionEditable=A%20protocol%20buffer%20query%20string%20documentor&font=Source%20Code%20Pro&name=1&owner=1&theme=Auto)

<div align="center">

protobuf-doc is a CLI tool that decodes and documents Protobuf-encoded query string. It extracts structured information and formats it into Markdown for easier readability. At the moment, it only supports query strings found in google maps.

![](https://img.shields.io/github/license/YasogaN/protobuf-doc.svg?style=for-the-badge&color=blue)
![](https://img.shields.io/github/forks/YasogaN/protobuf-doc.svg?style=for-the-badge)
![](https://img.shields.io/github/stars/YasogaN/protobuf-doc.svg?style=for-the-badge)
![](https://img.shields.io/github/watchers/YasogaN/protobuf-doc.svg?style=for-the-badge)
![](https://img.shields.io/github/issues/YasogaN/protobuf-doc.svg?style=for-the-badge)
![](https://img.shields.io/github/languages/code-size/YasogaN/protobuf-doc?style=for-the-badge)

## Frameworks/Technologies

![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

</div>

---

## Usage

protobuf-doc can be used directly without installation

```bash
npx protobuf-doc "<protobuf_string>" "<output_type>"
```

Alternatively, install it globally for frequent use:

```bash
npm install -g protobuf-doc
protobuf-doc "<protobuf_string>" "<output_type>"
```

### Arguments

`<protobuf_string>` - `string`: A Protobuf-encoded query string, typically used in URLs

`<output_type>` - `string`: The output format. Currently, only 'md' (Markdown) is supported.

### Example Usage

```bash
npx protobuf-doc "!1m7!1s0x3ae259fa5863aa65:0xe33d2d1f01284b9b!3s!6m4!4m1!1e1!4m1!1e3!2m2!1i10!2s!5m2!1sBnOwZvzePPfF4-EPy7LK0Ak!7e81!8m5!1b1!2b1!3b1!5b1!7b1!11m6!1e3!2e1!3sen!4slk!6m1!1i2!13m1!1e2" "md"
```

---

## TO-DO List

- [ ] Support JSON output for parsed Protobuf data.
- [ ] Extend parsing to non-Google Maps Protobuf query strings.
- [ ] Allow custom delimiters.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contributing

I welcome contributions from the community! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

---

## Code of Conduct

Please note that this project is governed by a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## Acknowledgements

Special thanks to [@marin-m](https://github.com/marin-m) for his outstanding work on the [pbtk](https://github.com/marin-m/pbtk) repository. His contributions and insights on protocol buffers were invaluable in my research and development process.

---
