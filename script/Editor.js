(function() {

	$.fn.editor = function(options) {
		var commands = {
			"Page" : {
				"undo" : {
					"details" : 'Undoes the last executed command.',
					"argument" : false,
					"group" : "Page",
					"class" : "fa fa-arrow-left"
				},
				"redo" : {
					"details" : "Redoes the previous undo command.",
					"argument" : false,
					"group" : "Page",
					"class" : "fa fa-arrow-right"
				},
				"backColor" : {
					"details" : "Changes the document background color. In styleWithCss mode, it affects the background color of the containing block instead. This requires a <color> value string to be passed in as a value argument. Note that Internet Explorer uses this to set the text background color.",
					"argument" : true,
					"format" : "^(#[0-9]{3} | #[0-9]{6} | [a-zA-Z0-9]+)$",
					"group" : "Page",
					"class" : "fa fa-align-center"
				},
				"formatBlock" : {
					"details" : "Adds an HTML block-style tag around the line containing the current selection, replacing the block element containing the line if one exists (in Firefox, BLOCKQUOTE is the exception - it will wrap any containing block element). Requires a tag-name string to be passed in as a value argument. Virtually all block style tags can be used (eg. \"H1\", \"P\", \"DL\", \"BLOCKQUOTE\"). (Internet Explorer supports only heading tags H1 - H6, ADDRESS, and PRE, which must also include the tag delimiters < >, such as \"<H1>\".",
						"argument" : false,
						"group" : "Page",
						"class" : "fa fa-dedent"
					},
					"forwardDelete" : {
						"details" : "Deletes the character ahead of the cursor's position.  It is the same as hitting the delete key.",
						"argument" : false,
						"group" : "Page",
						"class" : "fa fa-align-center"
					},
					"selectAll" : {
						"details" : 'Selects all of the content of the editable region.',
						"argument" : false,
						"group" : "Page",
						"class" : "fa fa-align-center"
					}
				},
				"Edit" : {
					"bold" : {
						"details" : "Toggles bold on/off for the selection or at the insertion point. Internet Explorer uses the <strong> tag instead of <b>.",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-bold"
					},
					"copy" : {
						"details" : "Copies the current selection to the clipboard. Conditions of having this behavior enabled varies from one browser to another, and have evolved over time. Check the compatibility table to determine if you can use it in your case.",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-copy"
					},
					"cut" : {
						"details" : "Cuts the current selection and copies it to the clipboard. Conditions of having this behavior enabled varies from one browser to another, and have evolved over time. Check the compatibility table for knowing if you can use it in your case.",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-cut"
					},
					"decreaseFontSize" : {
						"details" : "Adds a <small> tag around the selection or at the insertion point. (Not supported by Internet Explorer.)",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-align-center"
					},
					"italic" : {
						"details" : 'Toggles italics on/off for the selection or at the insertion point. (Internet Explorer uses the EM tag instead of I.)',
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-italic"
					},
					"justifyCenter" : {
						"details" : "Centers the selection or insertion point.",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-align-center"
					},
					"justifyFull" : {
						"details" : "Justifies the selection or insertion point.",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-align-justify"
					},
					"justifyLeft" : {
						"details" : 'Justifies the selection or insertion point to the left.',
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-align-left"
					},
					"delete" : {
						"details" : "Deletes the current selection.",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-remove"
					},
					"fontName" : {
						"details" : 'Changes the font name for the selection or at the insertion point. This requires a font name string ("Arial" for example) to be passed in as a value argument.',
						"argument" : true,
						"format" : "^[a-zA-Z\-\s]+$",
						"group" : "Edit",
						"class" : "fa fa-font"
					},
					"fontSize" : {
						"details" : "Changes the font size for the selection or at the insertion point. This requires an HTML font size (1-7) to be passed in as a value argument.",
						"argument" : true,
						"format" : "^[1-7]$",
						"group" : "Edit",
						"class" : "fa fa-align-center"
					},
					"foreColor" : {
						"details" : "Changes a font color for the selection or at the insertion point. This requires a color value string to be passed in as a value argument.",
						"argument" : true,
						"format" : "^(#[0-9]{3} | #[0-9]{6} | [a-zA-Z0-9]+)$",
						"group" : "Edit",
						"class" : "fa fa-align-center"
					},
					"strikeThrough" : {
						"details" : "Toggles strikethrough on/off for the selection or at the insertion point.",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-strikethrough"
					},
					"subscript" : {
						"details" : "Toggles subscript on/off for the selection or at the insertion point.",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-subscript"
					},
					"superscript" : {
						"details" : 'Toggles superscript on/off for the selection or at the insertion point.',
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-superscript"
					},
					"underline" : {
						"details" : "Toggles underline on/off for the selection or at the insertion point.",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-underline"
					},
					"unlink" : {
						"details" : 'Removes the anchor tag from a selected anchor link.',
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-unlink"
					},
					"increaseFontSize" : {
						"details" : "Adds a BIG tag around the selection or at the insertion point. (Not supported by Internet Explorer.)",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-font"
					},
					"indent" : {
						"details" : 'Indents the line containing the selection or insertion point. In Firefox, if the selection spans multiple lines at different levels of indentation, only the least indented lines in the selection will be indented.',
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-indent"
					},
					"justifyRight" : {
						"details" : "Right-justifies the selection or the insertion point.",
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-align-right"
					},
					"outdent" : {
						"details" : 'Outdents the line containing the selection or insertion point.',
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-outdent"
					},
					"paste" : {
						"details" : 'Pastes the clipboard contents at the insertion point (replaces current selection). Clipboard capability must be enabled in the user.js preference file.',
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-paste"
					},
					"removeFormat" : {
						"details" : 'Removes all formatting from the current selection.',
						"argument" : false,
						"group" : "Edit",
						"class" : "fa fa-remove"
					}
				},
				"Insert" : {
					"insertHorizontalRule" : {
						"details" : 'Inserts a horizontal rule at the insertion point (deletes selection).',
						"argument" : false,
						"group" : "Insert",
						"class" : "fa fa-pagelines"
					},
					"insertHTML" : {
						"details" : 'Inserts an HTML string at the insertion point (deletes selection). Requires a valid HTML string to be passed in as a value argument. (Not supported by Internet Explorer.)',
						"argument" : true,
						"format" : "^.*$",
						"group" : "Insert",
						"class" : "fa fa-html5"
					},
					"insertImage" : {
						"details" : "Inserts an image at the insertion point (deletes selection). Requires the image SRC URI string to be passed in as a value argument. The URI must contain at least a single character, which may be a white space. (Internet Explorer will create a link with a null URI value.)",
						"argument" : true,
						"format" : "^{^\s]+$",
						"group" : "Insert",
						"class" : "fa fa-image"
					},
					"insertOrderedList" : {
						"details" : "Creates a numbered ordered list for the selection or at the insertion point.",
						"argument" : false,
						"group" : "Insert",
						"class" : "fa fa-list-ol"
					},
					"insertUnorderedList" : {
						"details" : 'Creates a bulleted unordered list for the selection or at the insertion point.',
						"argument" : false,
						"group" : "Insert",
						"class" : "fa fa-list-ul"
					},
					"insertParagraph" : {
						"details" : "Inserts a paragraph around the selection or the current line. (Internet Explorer inserts a paragraph at the insertion point and deletes the selection.)",
						"argument" : false,
						"group" : "Insert",
						"class" : "fa fa-paragraph"
					},
					"insertText" : {
						"details" : 'Inserts the given plain text at the insertion point (deletes selection).',
						"argument" : true,
						"format": ".*$",
						"group" : "Insert",
						"class" : "fa fa-text-height"
					},
					"createLink" : {
						"details" : "Creates an anchor link from the selection, only if there is a selection. This requires the HREF URI string to be passed in as a value argument. The URI must contain at least a single character, which may be a white space. (Internet Explorer will create a link with a null URI value.)",
						"argument" : true,
						"format" : "^http://(www\.)?[a-zA-Z\.]+\.[a-zA-Z\.]+$",
						"group" : "Insert",
						"class" : "fa fa-link"
					},
					"heading" : {
						"details" : 'Adds a heading tag around a selection or insertion point line. Requires the tag-name string to be passed in as a value argument (i.e. "H1", "H6"). (Not supported by Internet Explorer and Safari.)',
						"argument" : true,
						"format" : "^H[1-6]$",
						"group" : "Insert",
						"class" : "fa fa-header"
					}
				},
				"Special" : {
					"styleWithCSS" : {
						"details" : "Toggles the use of HTML tags or CSS for the generated markup. Requires a boolean true/false as a value argument. ",
						"argument" : true,
						"format" : "^(true|false)$",
						"group" : "Special"	,
						"class" : "fa fa-css3"		
					},
					"contentReadOnly" : {
						"details" : "Makes the content document either read-only or editable. This requires a boolean true/false to be passed in as a value argument. (Not supported by Internet Explorer.)",
						"argument" : true,
						"format" : "^(true|false)$",
						"group" : "Special",
						"class" : "fa fa-align-center"
					},
					"enableInlineTableEditing" : {
						"details" : "Enables or disables the table row and column insertion and deletion controls. (Not supported by Internet Explorer.)",
						"argument" : false,
						"group" : "Special",
						"class" : "fa fa-pencil-square-o"
					},
					"enableObjectResizing" : {
						"details" : "Enables or disables the resize handles on images and other resizable objects. (Not supported by Internet Explorer.)",
						"argument" : false,
						"group" : "Special",
						"class" : "fa fa-align-center"
					},
					"insertBrOnReturn" : {
						"details" : "Controls whether the Enter key inserts a br tag or splits the current block element into two. (Not supported by Internet Explorer.)",
						"argument" : false,
						"group" : "Special",
						"class" : "fa fa-align-center"
					},
					"hiliteColor" : {
						"details" : "Changes the background color for the selection or at the insertion point. Requires a color value string to be passed in as a value argument. UseCSS must be turned on for this to function. (Not supported by Internet Explorer.)",
						"argument" : true,
						"format" : "^(#[0-9]{3} | #[0-9]{6} | [a-zA-Z0-9]+)$",
						"group" : "Special",
						"class" : "fa fa-bolt"
					}
				}
			};

		/**
		 *	Initialize
		 *
		 */
		 var Iframe = null,
		 textarea = null,
		 self = this,
		 pat = /(<[a-zA-Z\s]+>)+<br>(<\/[a-zA-Z\s]+>)+/g,
		 spaces = /[^\'\"]\s+[^\'\"]/;

		/**
		 *	Draw The Iframe for Design Mode - Visual Editor
		 */
		var drawIframe = function() {
		 	Iframe = $("<iframe/>", {
		 		name: 'editor_visual',
		 		id: 'editor_visual',
		 		class: 'editor'
		 	});
		 	self.append(Iframe);
		 }

		/**
		 *	Copy the design from Iframe to Textarea
		 */
		var handleIframe = function() {
			$(editor_visual.document).keyup(function() {
				$(textarea).text((editor_visual.document.body.innerHTML.replace(pat, "\n")));
				//$(textarea).text($(textarea).text().replace(spaces, "\n"));
			});
		 }

		/**
		 *	Copy the design from Iframe to Textarea
		 */
		var handleTextarea = function() {
			$(textarea).keyup(function() {
				editor_visual.document.body.innerHTML = ($(textarea).text().replace("\n", "<br>"));
			});
		 }

		/**
		 *	Draw The Textarea for Text Mode - Textual Editor
		 */
		var drawTextarea = function() {
			var pre = $("<pre />");
			textarea = $("<code/>", {
		 		name: 'editor_text',
		 		id: 'editor_text',
		 		class: 'editor',
		 		contentEditable: true
		 	}).appendTo(pre);
		 	self.append(pre);
		 }

		/**
		 *	Draw Titles for all Categories
		 */

		var drawTitle = function() {
		 	var div = $("<div/>", {
		 		class: 'titles'
		 	});
		 	for (group in commands) {
		 		var a = $("<a />", {
		 			text: group
		 		}).appendTo(div);

		 		a.data("content", group);

		 		a.click(function() {
		 			$(".controls").hide();
		 			$("a").removeClass("active");
		 			$(this).addClass("active");
		 			$("." + $(this).data("content")).show();
		 		});
		 	}

		 	self.append(div);

		 	// Add Text and Visual Toggle
		 	var toggle = $("<div />", {
		 		class: "toggle_editor visual"
		 	});

		 	toggle.click(function() {
		 		if($(this).hasClass("visual")) {
		 			$(this).removeClass("visual");
		 			$(this).addClass("text");

		 			// hide visual editor and show text editor
		 			$("#editor_visual").hide();
		 			$("#editor_text").show();
		 		} else {
		 			$(this).removeClass("text");
		 			$(this).addClass("visual");

		 			// hide text editor and show visual editor
		 			$("#editor_visual").show();
		 			$("#editor_text").hide();
		 		}
		 	});

		 	div.append(toggle);

		 }

		/**
		 *	Draw Commands to be used
		 */
		var drawControls = function() {
		 	for (group in commands) {
		 		var holder = $("<div/>", {
		 			class: "controls " + group,
		 			id: group + "_content"
		 		});

		 		for(key in commands[group]) {
		 			// Check if command is supported
		 			if(!document.queryCommandSupported(key)) continue;
		 			var child = $("<li />");

		 			var b = $("<i/>", {
		 				id:key + "_button",
		 				class: group + "_cnt",
		 				title: key
		 			}).appendTo(child);

		 			b.data("key", key);
		 			b.data("group", group);
		 			b.addClass(commands[group][key].class);

		 			holder.append(child);

		 		}
		 		self.append(holder);
		 	}
		 }

		/**
		  *	Attach Click event to each Button
		  */
		var attachClick = function() {
		  	$("i").each(function() {
		  		$(this).click(function() {
		  			var key = $(this).data("key");
		  			var group = $(this).data("group");

		  			if(group && key && commands[group][key]) {
		  				args = null;
		  				if(commands[group][key].argument == true) {
			  				// get argument
			  				args = prompt("Enter arguments : ", "");
			  			}

			  			run(key, args);
						$(textarea).text((editor_visual.document.body.innerHTML.replace(pat, "\n")));
			  		}
			  	});
		  		
		  	});
		  }

		/**
		 *	Run the commands
		 */
		var run = function(command, args) {
		 	if (typeof args == 'undefined') args = null;
		 	return editor_visual.document.execCommand(command, false, args);
		 }

		/**
		 *	Sarting point of plugin
		 */
		var init = function() {
			// Draw The suitable commands
			drawTitle();
			drawControls();
			drawTextarea();
			drawIframe();

			// Turn the design mode on
			editor_visual.document.designMode = "on";

			// Turn Button click ON for each operation
			attachClick();

			// Make Textarea and Iframe Sticky as hell
			handleIframe();
			handleTextarea();
		}

		// Here we go
		init();
	}

})(jQuery);