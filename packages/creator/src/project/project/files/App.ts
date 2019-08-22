/* eslint-disable */
export default `
<style>
html, body, #app {
  padding: 0;
  margin: 0;
	min-height: 100vh;
	min-width: 100vw;
}
</style>
<script>
	import ProjectData from './guitor.json'

	function compiler (h, PNode) {
		const result = []

		if (PNode !== undefined) {
			PNode.forEach(node => {

					if (node.nodeData.props) {

						Object.keys(node.nodeData.props).forEach(prop => {
							if (typeof node.nodeData.props[prop] === 'string' && node.nodeData.props[prop].indexOf('@/assets') === 0) {
								const asset = node.nodeData.props[prop].replace('@/assets/', '')
								node.nodeData.props[prop] = require (\`@/assets/\${asset}\`)
							}
						})
					}
					result.push(h(node.name, node.nodeData, node.children ? compiler(h, node.children) : []))
			})

			return result
		}
	}

	export default {
		name: 'app',
		render (h) {

			return h('div', {
				attrs: {
					id: 'app'
				}
			}, compiler(h, ProjectData.UiNodes))
		}
	}
</script>
`
