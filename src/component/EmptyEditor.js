
function EmptyEditor(){
return <div className="empty-editor v-center" data-testid="empty-editor">
      <div className="text-center">
        <p>
          <strong>Create a note</strong>
        </p>
        <p>
          <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>N</kbd>
        </p>
      </div>
    </div>
}
export default EmptyEditor;