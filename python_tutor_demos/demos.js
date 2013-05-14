// To embed Online Python Tutor visualizations into embedding-demo.html ...

// 1. Run generate_json_trace.py to generate execution traces as JavaScript variables.
//    (WARNING: The following lines are VERY LONG.)

// Run:
//   python3.3 ../OnlinePythonTutor/v3/generate_json_trace.py -p --create_jsvar=referencesTrace scripts/references.py
// and copy-and-paste the output line into here:
var referencesTrace = {"trace": [{"stdout": "", "heap": {}, "stack_to_render": [], "line": 1, "func_name": "<module>", "globals": {}, "event": "step_line", "ordered_globals": []}, {"stdout": "", "heap": {"1": ["HEAP_PRIMITIVE", "int", 42]}, "stack_to_render": [], "line": 2, "func_name": "<module>", "globals": {"num": ["REF", 1]}, "event": "step_line", "ordered_globals": ["num"]}, {"stdout": "", "heap": {"1": ["HEAP_PRIMITIVE", "int", 42], "2": ["HEAP_PRIMITIVE", "float", 3.1459]}, "stack_to_render": [], "line": 3, "func_name": "<module>", "globals": {"pi": ["REF", 2], "num": ["REF", 1]}, "event": "step_line", "ordered_globals": ["num", "pi"]}, {"stdout": "", "heap": {"1": ["HEAP_PRIMITIVE", "int", 42], "2": ["HEAP_PRIMITIVE", "float", 3.1459], "3": ["HEAP_PRIMITIVE", "str", "Hello, Python!"]}, "stack_to_render": [], "line": 3, "func_name": "<module>", "globals": {"pi": ["REF", 2], "num": ["REF", 1], "message": ["REF", 3]}, "event": "return", "ordered_globals": ["num", "pi", "message"]}], "code": "num = 42\npi = 3.1459\nmessage = \"Hello, Python!\"\n"};

var basicdemoTrace = {"code": "a = 1\nb = 2\nc = a + b\nprint(c)\n", "trace": [{"func_name": "<module>", "stdout": "", "globals": {}, "ordered_globals": [], "heap": {}, "event": "step_line", "line": 1, "stack_to_render": []}, {"func_name": "<module>", "stdout": "", "globals": {"a": ["REF", 1]}, "ordered_globals": ["a"], "heap": {"1": ["HEAP_PRIMITIVE", "int", 1]}, "event": "step_line", "line": 2, "stack_to_render": []}, {"func_name": "<module>", "stdout": "", "globals": {"b": ["REF", 2], "a": ["REF", 1]}, "ordered_globals": ["a", "b"], "heap": {"1": ["HEAP_PRIMITIVE", "int", 1], "2": ["HEAP_PRIMITIVE", "int", 2]}, "event": "step_line", "line": 3, "stack_to_render": []}, {"func_name": "<module>", "stdout": "", "globals": {"c": ["REF", 3], "b": ["REF", 2], "a": ["REF", 1]}, "ordered_globals": ["a", "b", "c"], "heap": {"1": ["HEAP_PRIMITIVE", "int", 1], "2": ["HEAP_PRIMITIVE", "int", 2], "3": ["HEAP_PRIMITIVE", "int", 3]}, "event": "step_line", "line": 4, "stack_to_render": []}, {"func_name": "<module>", "stdout": "3\n", "globals": {"c": ["REF", 3], "b": ["REF", 2], "a": ["REF", 1]}, "ordered_globals": ["a", "b", "c"], "heap": {"1": ["HEAP_PRIMITIVE", "int", 1], "2": ["HEAP_PRIMITIVE", "int", 2], "3": ["HEAP_PRIMITIVE", "int", 3]}, "event": "return", "line": 4, "stack_to_render": []}]};

var reassignTrace = {"code": "a = 1\nb = a\n\na = 2\n", "trace": [{"globals": {}, "func_name": "<module>", "line": 1, "stack_to_render": [], "event": "step_line", "heap": {}, "stdout": "", "ordered_globals": []}, {"globals": {"a": ["REF", 1]}, "func_name": "<module>", "line": 2, "stack_to_render": [], "event": "step_line", "heap": {"1": ["HEAP_PRIMITIVE", "int", 1]}, "stdout": "", "ordered_globals": ["a"]}, {"globals": {"a": ["REF", 1], "b": ["REF", 1]}, "func_name": "<module>", "line": 4, "stack_to_render": [], "event": "step_line", "heap": {"1": ["HEAP_PRIMITIVE", "int", 1]}, "stdout": "", "ordered_globals": ["a", "b"]}, {"globals": {"a": ["REF", 2], "b": ["REF", 1]}, "func_name": "<module>", "line": 4, "stack_to_render": [], "event": "return", "heap": {"1": ["HEAP_PRIMITIVE", "int", 1], "2": ["HEAP_PRIMITIVE", "int", 2]}, "stdout": "", "ordered_globals": ["a", "b"]}]};

var immutableTrace = {"trace": [{"stdout": "", "ordered_globals": [], "globals": {}, "func_name": "<module>", "line": 1, "heap": {}, "event": "step_line", "stack_to_render": []}, {"stdout": "", "ordered_globals": ["x", "y"], "globals": {"x": ["REF", 1], "y": ["REF", 1]}, "func_name": "<module>", "line": 3, "heap": {"1": ["HEAP_PRIMITIVE", "int", 10]}, "event": "step_line", "stack_to_render": []}, {"stdout": "", "ordered_globals": ["x", "y"], "globals": {"x": ["REF", 2], "y": ["REF", 1]}, "func_name": "<module>", "line": 3, "heap": {"1": ["HEAP_PRIMITIVE", "int", 10], "2": ["HEAP_PRIMITIVE", "int", 11]}, "event": "return", "stack_to_render": []}], "code": "x = y = 10\n\nx += 1   # same as  x = x + 1\n"};

var dynamicTrace = {"code": "x = 42\nx = \"The meaning of life\"\n", "trace": [{"heap": {}, "event": "step_line", "stack_to_render": [], "globals": {}, "ordered_globals": [], "stdout": "", "line": 1, "func_name": "<module>"}, {"heap": {"1": ["HEAP_PRIMITIVE", "int", 42]}, "event": "step_line", "stack_to_render": [], "globals": {"x": ["REF", 1]}, "ordered_globals": ["x"], "stdout": "", "line": 2, "func_name": "<module>"}, {"heap": {"2": ["HEAP_PRIMITIVE", "str", "The meaning of life"]}, "event": "return", "stack_to_render": [], "globals": {"x": ["REF", 2]}, "ordered_globals": ["x"], "stdout": "", "line": 2, "func_name": "<module>"}]};

// Run:
//   python3.3 ../OnlinePythonTutor/v3/generate_json_trace.py --create_jsvar=mutablelistsTrace scripts/mutablelists.py
// and copy-and-paste the output line into here:
var mutablelistsTrace = {"code": "a = [1, 2, 3]\nb = a\na[1] = 'foo'\nprint(b)\n\na = [1, 2, 3]\nb = [1, 2, 3]\na[1] = 'foo'\nprint(b)\n", "trace": [{"globals": {}, "ordered_globals": [], "func_name": "<module>", "stdout": "", "line": 1, "stack_to_render": [], "event": "step_line", "heap": {}}, {"globals": {"a": ["REF", 1]}, "ordered_globals": ["a"], "func_name": "<module>", "stdout": "", "line": 2, "stack_to_render": [], "event": "step_line", "heap": {"1": ["LIST", 1, 2, 3]}}, {"globals": {"a": ["REF", 1], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "func_name": "<module>", "stdout": "", "line": 3, "stack_to_render": [], "event": "step_line", "heap": {"1": ["LIST", 1, 2, 3]}}, {"globals": {"a": ["REF", 1], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "func_name": "<module>", "stdout": "", "line": 4, "stack_to_render": [], "event": "step_line", "heap": {"1": ["LIST", 1, "foo", 3]}}, {"globals": {"a": ["REF", 1], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "func_name": "<module>", "stdout": "[1, 'foo', 3]\n", "line": 6, "stack_to_render": [], "event": "step_line", "heap": {"1": ["LIST", 1, "foo", 3]}}, {"globals": {"a": ["REF", 2], "b": ["REF", 1]}, "ordered_globals": ["a", "b"], "func_name": "<module>", "stdout": "[1, 'foo', 3]\n", "line": 7, "stack_to_render": [], "event": "step_line", "heap": {"1": ["LIST", 1, "foo", 3], "2": ["LIST", 1, 2, 3]}}, {"globals": {"a": ["REF", 2], "b": ["REF", 3]}, "ordered_globals": ["a", "b"], "func_name": "<module>", "stdout": "[1, 'foo', 3]\n", "line": 8, "stack_to_render": [], "event": "step_line", "heap": {"2": ["LIST", 1, 2, 3], "3": ["LIST", 1, 2, 3]}}, {"globals": {"a": ["REF", 2], "b": ["REF", 3]}, "ordered_globals": ["a", "b"], "func_name": "<module>", "stdout": "[1, 'foo', 3]\n", "line": 9, "stack_to_render": [], "event": "step_line", "heap": {"2": ["LIST", 1, "foo", 3], "3": ["LIST", 1, 2, 3]}}, {"globals": {"a": ["REF", 2], "b": ["REF", 3]}, "ordered_globals": ["a", "b"], "func_name": "<module>", "stdout": "[1, 'foo', 3]\n[1, 2, 3]\n", "line": 9, "stack_to_render": [], "event": "return", "heap": {"2": ["LIST", 1, "foo", 3], "3": ["LIST", 1, 2, 3]}}]};

// 2. When the HTML document finishes loading, populate the three divs
//    (listSumDiv, hanoiDiv, happyDiv) with the visualizations
//    corresponding to the respective traces.
$(document).ready(function() {

  // 3. Create a new ExecutionVisualizer object for each visualization.
  //    (See js/pytutor.js for the full specs of ExecutionVisualizer.)
  //
  //    The basic idea is that the parent div name is passed as the first argument,
  //    and the trace object is passed as the second argument.
  //
  //    The third argument contains optional parameters.

  // Note that "embeddedMode: true" makes the visualizer appear more compact on-screen.
  // editCodeBaseURL is the base URL to prepend onto the 'Edit code' link.


  // A more subtle point is that when some div in your HTML webpage
  // (such as a visualizer div) expands in height, it will "push down"
  // all divs below it, but the SVG arrows rendered by jsPlumb
  // WILL NOT MOVE. Thus, they will be in the incorrect location
  // unless you call redrawAllConnectors().
  //
  // We use the "heightChangeCallback" optional parameter to force redraw
  // of all SVG arrows of ALL visualizers, whenever the height of one changes.
  //
  // Alternatively, here is one jQuery plugin that you can use to detect div height changes:
  // http://benalman.com/projects/jquery-resize-plugin/
  //
  // A related trick you can implement is to make a div never shrink in height once it's grown;
  // that way, you can avoid lots of jarring jumps and (inefficient) redraws.

  // Render referencesTrace inside of referencesDiv
  var referencesVisualizer = new ExecutionVisualizer('referencesDiv', referencesTrace,
                                                  {embeddedMode: true,
                                                   heightChangeCallback: redrawAllVisualizerArrows,
                                                   editCodeBaseURL: 'http://pythontutor.com/visualize.html'});

  var basicdemoVisualizer = new ExecutionVisualizer('basicdemoDiv', basicdemoTrace,
                                                  {embeddedMode: true,
                                                   heightChangeCallback: redrawAllVisualizerArrows,
                                                   editCodeBaseURL: 'http://pythontutor.com/visualize.html'});

  var reassignVisualizer = new ExecutionVisualizer('reassignDiv', reassignTrace,
                                                  {embeddedMode: true,
                                                   heightChangeCallback: redrawAllVisualizerArrows,
                                                   editCodeBaseURL: 'http://pythontutor.com/visualize.html'});

  var immutableVisualizer = new ExecutionVisualizer('immutableDiv', immutableTrace,
                                                  {embeddedMode: true,
                                                   heightChangeCallback: redrawAllVisualizerArrows,
                                                   editCodeBaseURL: 'http://pythontutor.com/visualize.html'});

  var dynamicVisualizer = new ExecutionVisualizer('dynamicDiv', dynamicTrace,
                                                  {embeddedMode: true,
                                                   heightChangeCallback: redrawAllVisualizerArrows,
                                                   editCodeBaseURL: 'http://pythontutor.com/visualize.html'});

  var mutablelistsVisualizer = new ExecutionVisualizer('mutablelistsDiv', mutablelistsTrace,
                                                  {embeddedMode: true,
                                                   heightChangeCallback: redrawAllVisualizerArrows,
                                                   editCodeBaseURL: 'http://pythontutor.com/visualize.html'});


  function redrawAllVisualizerArrows() {
    if (referencesVisualizer) referencesVisualizer.redrawConnectors();
    if (reassignVisualizer) reassignVisualizer.redrawConnectors();
    if (immutableVisualizer) immutableVisualizer.redrawConnectors();
    if (dynamicVisualizer) dynamicVisualizer.redrawConnectors();
    if (mutablelistsVisualizer) mutablelistsVisualizer.redrawConnectors();
    if (basicdemoVisualizer) basicdemoVisualizer.redrawConnectors();
  }


  // Call redrawConnectors() on all visualizers whenever the window is resized,
  // since HTML elements might have moved during a resize. The SVG arrows rendered
  // by jsPlumb don't automatically get re-drawn in their new positions unless
  // redrawConnectors() is called.
  $(window).resize(redrawAllVisualizerArrows);
});
